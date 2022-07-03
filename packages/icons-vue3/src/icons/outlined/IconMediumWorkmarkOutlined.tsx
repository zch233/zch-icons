// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MediumWorkmarkOutlinedSvg from 'icons-base/es/asn/MediumWorkmarkOutlined';

export interface MediumWorkmarkOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMediumWorkmarkOutlined: MediumWorkmarkOutlinedIconType = (props, context) => (
    <Icon name='MediumWorkmarkOutlined' {...{ ...props, ...context.attrs }} icon={MediumWorkmarkOutlinedSvg} />
);

IconMediumWorkmarkOutlined.displayName = 'IconMediumWorkmarkOutlined';
IconMediumWorkmarkOutlined.theme = 'outlined';
IconMediumWorkmarkOutlined.originName = 'medium-workmark';

export default IconMediumWorkmarkOutlined;
