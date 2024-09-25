import {
  CropProps,
  SettingConfigProps,
  RangePickerConfig,
  PROP_KEY,
  InputConfig,
  FormItem,
  SelectConfig,
  SwitchConfig,
} from "@tempi/core-editor";
import React, { useState } from "react";
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
  PLATFORM_CONFIG,
  PLATFORM,
} from "./constants";

export const Setting: React.FC<SettingConfigProps & CropProps> = ({
  separateDevice,
  allowCropImage,
}) => {
  const [selectAvailablePlatform, setSelectAvailablePlatform] = useState(true);
  const [, setBannerImage] = usePropSeparateDevice(
    BANNER_IMAGE_KEY,
    separateDevice
  );
  const [, setFlashSaleIcon] = usePropSeparateDevice(
    FLASH_SALE_ICON,
    separateDevice
  );

  const platformList = Object.keys(PLATFORM).map((platformName) => ({
    label: platformName,
    value: platformName,
  }));

  return (
    <>
      <FormItem layout="horizontal" label="Banner Image">
        <ImageUploadButton
          accept="image/jpg, image/jpeg, image/png, image/gif, image/webp"
          beforeUpload={beforeUploadImage}
          imagePropKey={BANNER_IMAGE_KEY}
          placeholder={<>Tải ảnh lên (Tối đa 20MB)</>}
          deleteImage={() => setBannerImage(undefined)}
          separateDevice={separateDevice}
          allowCropImage={allowCropImage}
        />
      </FormItem>
      <ColorPickerConfig
        propKey={BACKGROUND_COLOR}
        formItemProps={{
          label: "Màu nền",
        }}
        separateDevice={separateDevice}
      />
      <FormItem layout="horizontal" label="FlashSale Icon">
        <ImageUploadButton
          accept="image/jpg, image/jpeg, image/png, image/gif, image/webp"
          beforeUpload={beforeUploadImage}
          imagePropKey={FLASH_SALE_ICON}
          placeholder={<>Tải ảnh lên (Tối đa 20MB)</>}
          deleteImage={() => setFlashSaleIcon(undefined)}
          separateDevice={separateDevice}
          allowCropImage={allowCropImage}
        />
      </FormItem>
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
          label: "Right button link",
          layout: "vertical",
        }}
        propKey={PROP_KEY.joinKey(PROP_KEY.ViewMoreUrl)}
        inputProps={{
          placeholder: "Nhập url hoặc slug",
          style: { width: "100%" },
        }}
      />
      <InputConfig
        formItemProps={{
          label: "Right button text",
          layout: "vertical",
        }}
        propKey={PROP_KEY.joinKey("viewMoreText")}
        inputProps={{
          placeholder: "Nhập text",
          style: { width: "100%" },
        }}
      />
      <SwitchConfig
        formItemProps={{
          label: "Lựa chọn platform có sẵn",
        }}
        switchProps={{
          checkedChildren: "Có",
          unCheckedChildren: "Không",
          checked: selectAvailablePlatform,
          onChange: () => setSelectAvailablePlatform(!selectAvailablePlatform),
        }}
      />
      {selectAvailablePlatform ? (
        <SelectConfig
          propKey={PLATFORM_CONFIG}
          formItemProps={{ label: "Lựa chọn platform", layout: "vertical" }}
          selectProps={{ allowClear: false }}
          options={platformList}
        />
      ) : (
        <></>
      )}
      <InputConfig
        formItemProps={{
          label: "Cấu hình slug",
          layout: "vertical",
        }}
        propKey={PROP_KEY.joinKey(PROP_KEY.CollectionSlug)}
        inputProps={{
          placeholder: "Nhập url hoặc slug",
          style: { width: "100%" },
        }}
      />
    </>
  );
};
