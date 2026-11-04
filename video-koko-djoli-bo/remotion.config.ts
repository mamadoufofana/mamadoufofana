import { Config } from "@remotion/cli/config";

Config.setVideoImageFormat("jpeg");
Config.setOverwriteOutput(true);
Config.setCodec("h264");
// Format de pixel compatible avec iPhone / TikTok
Config.setPixelFormat("yuv420p");
