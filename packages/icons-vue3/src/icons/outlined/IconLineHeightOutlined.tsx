// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LineHeightOutlinedSvg from 'icons-base/es/asn/LineHeightOutlined';

export interface LineHeightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLineHeightOutlined: LineHeightOutlinedIconType = (props, context) => (
    <Icon name='LineHeightOutlined' {...{ ...props, ...context.attrs }} icon={LineHeightOutlinedSvg} />
);

IconLineHeightOutlined.displayName = 'IconLineHeightOutlined';
IconLineHeightOutlined.theme = 'outlined';
IconLineHeightOutlined.originName = 'line-height';

export default IconLineHeightOutlined;
