// queries/getCertifications.ts
import { Certification } from '../types';
import certificationsData from '../data/certifications';

export async function getCertifications(): Promise<Certification[]> {
  return certificationsData;
}
