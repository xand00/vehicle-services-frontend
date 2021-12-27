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
  query VehicleBrands {
    vehicleBrands {
      data {
        id,
        attributes {
          name,
          vehicle_models {
            data {
              id,
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`