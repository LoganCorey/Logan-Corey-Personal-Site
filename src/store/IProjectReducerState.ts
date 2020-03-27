import {IProject} from '../utils/IProject';

export interface IProjectReducerState{
    filters: string[];
    numProjects: number;
    projects: IProject[];
    filteredProjects: IProject[];
}