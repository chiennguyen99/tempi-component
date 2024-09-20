import {
  CropProps,
  SettingConfigProps,
  RangePickerConfig,
  PROP_KEY,
  InputConfig,
} from "@tempi/core-editor";
import React from "react";
import {
  ImageUploadButton,
  beforeUploadImage,
  usePropSeparateDevice,
  ColorPickerConfig,
} from "@tempi/core-editor";
import {
  BANNER_IMAGE_KEY,
  BACKGROUND_COLOR,
  FLASH_SALE_ICON,
} from "./constants";

export const Setting: React.FC<SettingConfigProps & CropProps> = ({
  separateDevice,
  allowCropImage,
}) => {
  const [, setBannerImage] = usePropSeparateDevice(
    BANNER_IMAGE_KEY,
    separateDevice
  );
  const [, setFlashSaleIcon] = usePropSeparateDevice(
    FLASH_SALE_ICON,
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
      <ColorPickerConfig
        propKey={BACKGROUND_COLOR}
        formItemProps={{
          label: "Màu nền",
        }}
        separateDevice={separateDevice}
      />
      <ImageUploadButton
        accept="image/jpg, image/jpeg, image/png, image/gif, image/webp"
        beforeUpload={beforeUploadImage}
        imagePropKey={FLASH_SALE_ICON}
        placeholder={<>Tải ảnh lên (Tối đa 20MB)</>}
        deleteImage={() => setFlashSaleIcon(undefined)}
        separateDevice={separateDevice}
        allowCropImage={allowCropImage}
      />
      <RangePickerConfig
        formItemProps={{ label: "Thời gian hiển thị" }}
        rangePickerProps={{
          format: "DD-MM-YYYY HH:mm",
          showTime: true,
          placeholder: ["dd/mm/yyyy hh:mm", "dd/mm/yyyy hh:mm"],
        }}
        propKeyStart={PROP_KEY.joinKey(
          PROP_KEY.TimeVisibility,
          PROP_KEY.StartTime
        )}
        propKeyEnd={PROP_KEY.joinKey(PROP_KEY.TimeVisibility, PROP_KEY.EndTime)}
      />
      <InputConfig
        formItemProps={{
          label: "Xem tất cả",
          layout: "vertical",
        }}
        propKey={PROP_KEY.joinKey(PROP_KEY.ViewMoreUrl)}
        inputProps={{
          placeholder: "Nhập url hoặc slug",
          style: { width: "100%" },
        }}
      />
    </>
  );
};
