"""Génère une musique instrumentale douce d'inspiration africaine (kalimba,
basse chaude, shaker, nappe) entièrement synthétisée : aucun droit d'auteur.
Usage : python3 outils/creer_musique.py public/audio/musique.wav
"""
import sys, wave
import numpy as np

SR = 44100
DUREE = 30.0
BPM = 92
BEAT = 60 / BPM
N = int(SR * DUREE)
rng = np.random.default_rng(7)

def note(freq):
    return 440 * 2 ** ((freq - 69) / 12)

def kalimba(f, d=1.6, amp=0.5):
    t = np.arange(int(SR * d)) / SR
    env = np.exp(-t * 3.2) * (1 - np.exp(-t * 400))
    s = (np.sin(2 * np.pi * f * t) + 0.35 * np.sin(2 * np.pi * f * 5.4 * t) * np.exp(-t * 18)
         + 0.15 * np.sin(2 * np.pi * f * 2 * t) * np.exp(-t * 6))
    return amp * s * env

def basse(f, d, amp=0.45):
    t = np.arange(int(SR * d)) / SR
    env = np.minimum(1, t * 30) * np.exp(-t * 1.6)
    return amp * (np.sin(2 * np.pi * f * t) + 0.25 * np.sin(4 * np.pi * f * t)) * env

def shaker(d=0.09, amp=0.08):
    n = int(SR * d)
    bruit = rng.standard_normal(n)
    bruit = np.diff(bruit, prepend=0)  # passe-haut simple
    env = np.exp(-np.arange(n) / SR * 45)
    return amp * bruit * env

def ajoute(buf, s, t0):
    i = int(t0 * SR)
    if i >= len(buf):
        return
    s = s[: len(buf) - i]
    buf[i : i + len(s)] += s

mel = np.zeros(N); bas = np.zeros(N); perc = np.zeros(N); nappe = np.zeros(N)

# Gamme pentatonique majeure de Ré, progression I - vi - IV - V
accords = [
    (50, [62, 66, 69, 74, 69, 66, 64, 66]),  # D
    (47, [59, 62, 66, 71, 66, 62, 64, 62]),  # Bm
    (43, [59, 62, 67, 71, 67, 64, 62, 64]),  # G
    (45, [61, 64, 69, 73, 69, 64, 66, 64]),  # A
]
t = 0.0
mesure = 0
while t < DUREE:
    racine, motif = accords[mesure % 4]
    for k, m in enumerate(motif):  # croches
        tt = t + k * BEAT / 2
        amp = 0.42 if k % 2 == 0 else 0.3
        if (mesure + k) % 7 == 3:
            m += 12  # petite ornementation
        ajoute(mel, kalimba(note(m), amp=amp), tt + rng.uniform(0, 0.012))
    ajoute(bas, basse(note(racine), BEAT * 1.5), t)
    ajoute(bas, basse(note(racine), BEAT * 0.9, 0.3), t + BEAT * 1.5)
    ajoute(bas, basse(note(racine + 7), BEAT * 1.5, 0.35), t + BEAT * 2.5)
    for k in range(16):  # doubles croches
        ajoute(perc, shaker(amp=0.07 if k % 4 == 2 else 0.035), t + k * BEAT / 4)
    # nappe douce
    d = BEAT * 4
    tn = np.arange(int(SR * d)) / SR
    envn = np.sin(np.pi * tn / d) ** 2
    for m in (racine + 12, racine + 19, racine + 24):
        ajoute(nappe, 0.06 * np.sin(2 * np.pi * note(m) * tn) * envn, t)
    t += BEAT * 4
    mesure += 1

mix = 0.9 * mel + 0.8 * bas + perc + nappe
# écho léger sur la kalimba pour l'espace
delai = int(SR * BEAT * 0.75)
mix[delai:] += 0.18 * mix[:-delai]
# fondus d'entrée et de sortie
fade_in = int(SR * 1.0); fade_out = int(SR * 2.5)
mix[:fade_in] *= np.linspace(0, 1, fade_in)
mix[-fade_out:] *= np.linspace(1, 0, fade_out)
mix = mix / np.max(np.abs(mix)) * 0.8

stereo = np.stack([mix, np.roll(mix, int(SR * 0.012))], axis=1)
pcm = (stereo * 32767).astype(np.int16)
with wave.open(sys.argv[1], "wb") as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes(pcm.tobytes())
print("ok", sys.argv[1])
