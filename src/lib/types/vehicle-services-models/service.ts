import { DescriptionProp, IDProp } from "@/types/props";
import { PreviewImage } from "./preview-image";

export type Service = {
    preview_image: PreviewImage,
    name: string,
    sub_title: string,
    description: DescriptionProp,
    id: IDProp
}