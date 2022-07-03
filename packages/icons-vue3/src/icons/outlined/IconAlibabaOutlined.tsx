// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AlibabaOutlinedSvg from 'icons-base/es/asn/AlibabaOutlined';

export interface AlibabaOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAlibabaOutlined: AlibabaOutlinedIconType = (props, context) => (
    <Icon name='AlibabaOutlined' {...{ ...props, ...context.attrs }} icon={AlibabaOutlinedSvg} />
);

IconAlibabaOutlined.displayName = 'IconAlibabaOutlined';
IconAlibabaOutlined.theme = 'outlined';
IconAlibabaOutlined.originName = 'alibaba';

export default IconAlibabaOutlined;
