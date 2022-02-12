import { request, gql } from 'graphql-request'
const graphqlAPI = process.env.REACT_APP_GRAPHCMS_ENDPOINT;

export const getFeaturedProjects = async () => {
    const query = gql`
        query MyQuery {
            projects(where: {featured: true}) {
                tags {
                    name
                    slug
                    id
                }
                picture {
                    url
                }
                slug
                title
                id
                excerpt
            }
        }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.projects;
};


export const getProjectDetail = async (slug) => {
    const query = gql`
        query getProjectDetail($slug: String!) {
            project(where: {slug: $slug}) {
                tags {
                    id
                    name
                    slug
                }
                description {
                    raw
                }
                excerpt
                featured
                id
                slug
                title
                picture {
                    url
                }
                photos {
                    url
                }
            }
        }
    `;
  
    const result = await request(graphqlAPI, query, {slug});
  
    return result.project;
};


export const getAllProjects = async () => {
    const query = gql`
        query MyQuery {
            projectsConnection {
                edges {
                    node {
                        tags {
                            id
                            name
                            slug
                        }
                        excerpt
                        id
                        picture {
                            url
                        }
                        slug
                        title
                    }
                }
            }
        }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.projectsConnection.edges;
};


export const getProjectsByTag = async (slug) => {
    const query = gql`
        query MyQuery($slug: String!) {
            projects(where: {tags_some: {slug: $slug}}) {
                excerpt
                id
                slug
                title
                picture {
                    url
                }
            }
        }
    `;
  
    const result = await request(graphqlAPI, query, {slug});
  
    return result.projects;
};


export const getTagName = async (slug) => {
    const query = gql`
        query MyQuery($slug: String!) {
            tag(where: {slug: $slug}) {
                name
                id
                slug
            }
        }
    `;
  
    const result = await request(graphqlAPI, query, {slug});
  
    return result.tag;
};


export const getCategoryName = async (slug) => {
    const query = gql`
        query MyQuery($slug: String!) {
            category(where: {slug: $slug}) {
                name
                id
                slug
            }
        }
    `;
  
    const result = await request(graphqlAPI, query, {slug});
  
    return result.category;
};


export const getProjectsByCategory = async (slug) => {
    const query = gql`
        query MyQuery($slug: String!) {
            projects(where: {project_category: {slug: $slug}}) {
                excerpt
                id
                picture {
                    url
                }
                slug
                title
            }
        }
    `;
  
    const result = await request(graphqlAPI, query, {slug});
  
    return result.projects;
};


export const getAllTags = async () => {
    const query = gql`
        query MyQuery {
            tags {
                id
                name
                slug
            }
        }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.tags;
};


export const getAllCategories = async () => {
    const query = gql`
        query MyQuery {
            categories {
                id
                name
                slug
            }
        }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.categories;
};