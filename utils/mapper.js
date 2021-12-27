export function servicesPromotionMapper(servicesPromotion) {
    const item = {};
    item.description = servicesPromotion.description;
    item.name = servicesPromotion.name;
    item.preview_image = { url: servicesPromotion.preview_image.url };
    item.sub_title = servicesPromotion.sub_title;
    return item;
}

export function servicesRemap(services) {
    return services.map(service => {
        const item = {};
        item.description = service.description;
        item.name = service.name;
        item.preview_image = service.preview_image;
        item.sub_title = service.sub_title;
    });
}