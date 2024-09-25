import {
  CropProps,
  SettingConfigProps,
  RangePickerConfig,
  PROP_KEY,
  InputConfig,
  SelectConfig,
  SwitchConfig,
} from "@tempi/core-editor";
import React, { useState } from "react";
import { usePropSeparateDevice, ColorPickerConfig } from "@tempi/core-editor";
import {
  BANNER_IMAGE_KEY,
  BACKGROUND_COLOR,
  FLASH_SALE_ICON,
  PLATFORM_CONFIG,
  PLATFORM,
  VIEW_MORE_TEXT,
  AVAILABLE_TEXT_CONFIG,
  BUY_NOW_TEXT_CONFIG,
  PRODUCT_LIST_BACKGROUND_CONFIG,
} from "./constants";

export const Setting: React.FC<SettingConfigProps & CropProps> = ({
  separateDevice,
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
      <InputConfig
        formItemProps={{
          label: "Banner image url",
          layout: "vertical",
        }}
        propKey={BANNER_IMAGE_KEY}
        inputProps={{
          placeholder: "link",
          style: { width: "100%" },
        }}
      />
      <ColorPickerConfig
        propKey={BACKGROUND_COLOR}
        formItemProps={{
          label: "Màu nền",
        }}
        separateDevice={separateDevice}
      />
      <ColorPickerConfig
        propKey={PRODUCT_LIST_BACKGROUND_CONFIG}
        formItemProps={{
          label: "Màu nền danh sách sản phẩm",
        }}
        separateDevice={separateDevice}
      />
      <InputConfig
        formItemProps={{
          label: "Flash sale image url",
          layout: "vertical",
        }}
        propKey={FLASH_SALE_ICON}
        inputProps={{
          placeholder: "link",
          style: { width: "100%" },
        }}
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
      <InputConfig
        formItemProps={{
          label: "View more link",
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
          label: "View more text",
          layout: "vertical",
        }}
        propKey={VIEW_MORE_TEXT}
        inputProps={{
          placeholder: "Xem chi tiết",
          style: { width: "100%" },
        }}
      />
      <InputConfig
        formItemProps={{
          label: "Available text config",
          layout: "vertical",
        }}
        propKey={AVAILABLE_TEXT_CONFIG}
        inputProps={{
          placeholder: "Còn {{totalAvailable}} sản phẩm",
        }}
      />
      <InputConfig
        formItemProps={{
          label: "Buy now text config",
          layout: "vertical",
        }}
        propKey={BUY_NOW_TEXT_CONFIG}
        inputProps={{
          placeholder: "Mua ngay",
        }}
      />
    </>
  );
};
