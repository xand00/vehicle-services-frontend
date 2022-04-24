import gql from "graphql-tag"

export const GET_SERVICES_PROMOTION = `
  query ServicesPromotion {
    servicesPromotion {
      data {
        id,
        attributes {
          name,
          description,
          sub_title,
          preview_image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GET_SERVICES = `
  query Services {
    services {
      data {
        id,
        attributes {
          name,
          description,
          sub_title,
          slug,
          preview_image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GET_SERVICE = `
  query Service($id: ID!) {
    service(id: $id) {
      data {
        id,
        attributes {
          name,
          description,
          sub_title,
          slug,
          preview_image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`

export const GET_TESTIMONIALS = `
  query Testimonials {
    testimonials {
      data {
        id,
        attributes {
          clientName,
          body
        }
      }
    }
  }
`

export const GET_VEHICLE_BRANDS = `
  query VehicleBrands($name: String) {
    vehicleBrands(filters: { name: { containsi: $name } }) {
      data {
        id,
        attributes {
          name,
        }
      }
    }
  }
`

export const GET_VEHICLE_MODELS = `
  query VehicleModels($name: String, $vehicle_brand_id: ID) {
    vehicleModels(filters: { name: { containsi: $name }, vehicle_brand: { id: { eq: $vehicle_brand_id } } }) {
      data {
        id,
        attributes {
          name,
        }
      }
    }
  }
`

export const GET_CONTACT = `
  query Contact {
    contact {
      data {
        id,
        attributes {
          fullPhoneNumber,
          email
        }
      }
    }
  }
`

export const CREATE_SERVICES_REQUEST = gql`
mutation CreateServicesRequest(
  $services: [ID!],
  $firstName: String!,
  $lastName: String,
  $countryCode: String!,
  $phoneNumber: String!,
  $vehicle_brand: ID,
  $vehicle_model: ID
) {
    createServicesRequest(data: {
      services: $services,
      firstName: $firstName,
      lastName: $lastName,
      countryCode: $countryCode,
      phoneNumber: $phoneNumber,
      vehicle_brand: $vehicle_brand,
      vehicle_model: $vehicle_model,
    }) {
      data {
        id,
        attributes {
          firstName,
          lastName,
          countryCode,
          phoneNumber
        }
      }
    }
  }
`