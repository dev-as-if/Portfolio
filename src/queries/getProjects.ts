// queries/getProjects.ts
import { Project } from '../types';
import projectsData from '../data/projects';

export async function getProjects(): Promise<Project[]> {
  return projectsData;
}
