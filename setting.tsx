import { CropProps, SettingConfigProps } from "@tempi/core-editor";
import React from "react";
import {
  ImageUploadButton,
  beforeUploadImage,
  usePropSeparateDevice,
} from "@tempi/core-editor";
import { BANNER_IMAGE_KEY } from "./constants";

export const Setting: React.FC<SettingConfigProps & CropProps> = ({
  separateDevice,
  allowCropImage,
}) => {
  const [, setBannerImage] = usePropSeparateDevice(
    BANNER_IMAGE_KEY,
    separateDevice
  );

  return (
    <>
      <ImageUploadButton
        accept="image/jpg, image/jpeg, image/png, image/gif, image/webp"
        beforeUpload={beforeUploadImage}
        imagePropKey={BANNER_IMAGE_KEY}
        placeholder={<>Tải ảnh lên (Tối đa 20MB)</>}
        deleteImage={() => setBannerImage(undefined)}
        separateDevice={separateDevice}
        allowCropImage={allowCropImage}
      />
    </>
  );
};
