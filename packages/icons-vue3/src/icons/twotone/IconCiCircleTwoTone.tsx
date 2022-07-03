// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CiCircleTwotoneSvg from 'icons-base/es/asn/CiCircleTwotone';

export interface CiCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCiCircleTwotone: CiCircleTwotoneIconType = (props, context) => (
    <Icon name='CiCircleTwotone' {...{ ...props, ...context.attrs }} icon={CiCircleTwotoneSvg} />
);

IconCiCircleTwotone.displayName = 'IconCiCircleTwotone';
IconCiCircleTwotone.theme = 'twotone';
IconCiCircleTwotone.originName = 'ci-circle';

export default IconCiCircleTwotone;
