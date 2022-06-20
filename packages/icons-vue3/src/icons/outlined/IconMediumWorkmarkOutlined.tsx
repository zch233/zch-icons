// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MediumWorkmarkOutlinedSvg from 'icon-base/es/asn/MediumWorkmarkOutlined';

export interface MediumWorkmarkOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMediumWorkmarkOutlined: MediumWorkmarkOutlinedIconType = (props, context) => (
    <Icon name='MediumWorkmarkOutlined' {...{ ...props, ...context.attrs }} icon={MediumWorkmarkOutlinedSvg} />
);

IconMediumWorkmarkOutlined.displayName = 'IconMediumWorkmarkOutlined';

export default IconMediumWorkmarkOutlined;
