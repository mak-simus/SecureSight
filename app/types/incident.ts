import { Camera } from './camera';

export type Incident = {
  id: string;
  cameraId: string;
  type: string;
  tsStart: string;
  tsEnd: string;
  thumbnailUrl: string;
  videoUrl: string;
  resolved: boolean;
  camera?: Camera

};