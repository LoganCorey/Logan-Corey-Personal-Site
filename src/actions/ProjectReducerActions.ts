export const ADD_FILTER = "ADD_FILTER";

export const REMOVE_FILTER = "REMOVE_FILTER";

export const FETCH_PROJECT = "FETCH_PROJECT";
export const fetchProject = (projectName: string) => {
  return {
    type: FETCH_PROJECT,
    projectName: projectName
  };
};
