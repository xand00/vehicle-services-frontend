import { DescriptionProp, NameProp, SubTitleProp } from "@/types/props";
import { PreviewImage } from "./preview-image";

export type ServicesPromotion = {
    preview_image: PreviewImage,
    name: NameProp,
    description: DescriptionProp,
    sub_title: SubTitleProp
}