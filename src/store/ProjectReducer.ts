import { IProjectReducerState } from "./IProjectReducerState";
import { IProject } from "../utils/IProject";
import {
  ADD_FILTER,
  REMOVE_FILTER,
} from "../actions/ProjectReducerActions";
import { Projects } from "./Projects";

const initialState: IProjectReducerState = {
  filters: [],
  numProjects: Projects.length,
  projects: Projects,
  filteredProjects: Projects
};

export const ProjectReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_FILTER:
      const updatedFiltersAdd: string[] = [...state.filters, action.filter];
      const updatedFilteredProjectsAdd = state.projects.filter(
        (project: IProject) => {
          return project.languages.some((language: string) => {
            return updatedFiltersAdd.includes(language);
          });
        }
      );
      return{
        ...state,
        filters:updatedFiltersAdd,
        filteredProjects: updatedFilteredProjectsAdd,
        numProjects: updatedFilteredProjectsAdd.length,
      }

    case REMOVE_FILTER:
      const updatedFiltersRemove: string[] = state.filters.filter(
        (filter: string) => {
          return filter !== action.filter;
        }
      );

      let updatedFilteredProjectsRemove: IProject[] = [];
      if (updatedFiltersRemove.length !== 0) {
        updatedFilteredProjectsRemove = state.projects.filter(
          (project: IProject) => {
            return project.languages.some((language: string) => {
              return updatedFiltersRemove.includes(language);
            });
          }
        );
      }

      return{
        ...state,
        filters:updatedFiltersRemove,
        filteredProjects: updatedFilteredProjectsRemove,
        numProjects: updatedFilteredProjectsRemove.length,
      }

    default:
      return state;
  }
};
