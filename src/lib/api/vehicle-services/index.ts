import { gql } from "@apollo/client";
import { initializeApollo } from "./apollo-client";
import { DocumentNode } from "graphql";
import { GET_CONTACT, GET_SERVICE, GET_SERVICES, GET_SERVICES_PROMOTION, GET_TESTIMONIALS, GET_VEHICLE_BRANDS, GET_VEHICLE_MODELS } from "./graphql-queries";
import normalizeResponseFromStrapi from "./normalize-response-from-strapi";
import { IDProp } from "@/types/props";

type ObjectWithVariables = {
  variables?: object
}

type QueryObject = ObjectWithVariables & {
  query: DocumentNode
}

type MutationObject = ObjectWithVariables & {
  mutation: DocumentNode
}

const query = (string: string, payload: any = null) => {
  const queryObject: QueryObject = {
    query: gql(string)
  };
  if(payload) queryObject.variables = payload;
  const apolloClient = initializeApollo();
  return apolloClient.query(queryObject)
}

async function mutate(string: string, payload = null) {
  const mutateObject: MutationObject = {
    mutation: gql(string)
  };
  if(payload) mutateObject.variables = payload;
  const apolloClient = initializeApollo();
  return await apolloClient.mutate(mutateObject)
}

export async function getServicesPromotion() {
  return normalizeResponseFromStrapi(await query(GET_SERVICES_PROMOTION)).data.servicesPromotion;
}

export async function getServices() {
  return normalizeResponseFromStrapi(await query(GET_SERVICES)).data.services;
}

type getServicePayload = {
  id: IDProp
}

export async function getService(payload: getServicePayload) {
  return normalizeResponseFromStrapi(await query(GET_SERVICE, payload)).data.service;
}

export async function getTestimonials() {
  return normalizeResponseFromStrapi(await query(GET_TESTIMONIALS)).data.testimonials;
}

type getVehicleBrandsPayload = {
  name: string
}

export async function getVehicleBrands(payload: getVehicleBrandsPayload) {
  return normalizeResponseFromStrapi(await query(GET_VEHICLE_BRANDS, payload)).data.vehicleBrands;
}

type getVehicleModelsPayload = {
  name: string,
  vehicle_brand_id: IDProp
}

export async function getVehicleModels(payload: getVehicleModelsPayload) {
  return normalizeResponseFromStrapi(await query(GET_VEHICLE_MODELS, payload)).data.vehicleModels;
}

export async function getContact() {
  return normalizeResponseFromStrapi(await query(GET_CONTACT)).data.contact;
}