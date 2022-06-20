// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MediumOutlinedSvg from 'icon-base/es/asn/MediumOutlined';

export interface MediumOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMediumOutlined: MediumOutlinedIconType = (props, context) => (
    <Icon name='MediumOutlined' {...{ ...props, ...context.attrs }} icon={MediumOutlinedSvg} />
);

IconMediumOutlined.displayName = 'IconMediumOutlined';

export default IconMediumOutlined;
