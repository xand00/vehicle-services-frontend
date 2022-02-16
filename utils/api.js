import { gql } from "@apollo/client";
import { getApolloClient } from "../lib/apollo-client";
import { CREATE_SERVICES_REQUEST, GET_CONTACT, GET_SERVICE, GET_SERVICES, GET_SERVICES_PROMOTION, GET_TESTIMONIALS, GET_VEHICLE_BRANDS } from "./graphqlQueries";
import normalizeResponseFromStrapi from "./normalizeResponseFromStrapi";

export function getStrapiURL(path) {
  return `${
    process.env.BACKEND_URL + '/api'
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

// export async function getCategory(slug) {
//   const categories = await fetchAPI(`/categories?slug=${slug}`);
//   return categories?.[0];
// }

// export async function getServices() {
//   const services = await fetchAPI("/services");
//   return services;
// }

// export async function getServicesPromotion() {
//   const servicesPromotion = await fetchAPI("/services-promotion");
//   return servicesPromotion;
// }

async function query(string, payload = null) {
  const queryObject = {
    query: gql(string)
  };
  if(payload) queryObject.variables = payload;
  const apolloClient = getApolloClient();
  return await apolloClient.query(queryObject)
}

async function mutate(string, payload = null) {
  const mutateObject = {
    mutation: gql(string)
  };
  if(payload) mutateObject.variables = payload;
  return await apolloClient.mutate(mutateObject)
}

export async function getServicesPromotion() {
  // console.log((await query(GET_SERVICES_PROMOTION)).data.servicesPromotion.data.attributes.preview_image)
  return normalizeResponseFromStrapi(await query(GET_SERVICES_PROMOTION)).data.servicesPromotion;
}

export async function getServices() {
  return normalizeResponseFromStrapi(await query(GET_SERVICES)).data.services;
}

export async function getService(payload) {
  return normalizeResponseFromStrapi(await query(GET_SERVICE, payload)).data.service;
}

export async function getTestimonials() {
  return normalizeResponseFromStrapi(await query(GET_TESTIMONIALS)).data.testimonials;
}

export async function getVehicleBrands() {
  return normalizeResponseFromStrapi(await query(GET_VEHICLE_BRANDS)).data.vehicleBrands;
}

export async function getContact() {
  return normalizeResponseFromStrapi(await query(GET_CONTACT)).data.contact;
}

export async function createSelrvicesRequest(data) {
  return normalizeResponseFromStrapi(await mutate(CREATE_SERVICES_REQUEST(JSON.stringify(data).replace(/"([^"]+)":/g, '$1:'))));
}
