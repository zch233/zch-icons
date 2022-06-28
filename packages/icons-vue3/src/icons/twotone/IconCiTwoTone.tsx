// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CiTwotoneSvg from 'gupo-icons-base/es/asn/CiTwotone';

export interface CiTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCiTwotone: CiTwotoneIconType = (props, context) => <Icon name='CiTwotone' {...{ ...props, ...context.attrs }} icon={CiTwotoneSvg} />;

IconCiTwotone.displayName = 'IconCiTwotone';
IconCiTwotone.theme = 'twotone';
IconCiTwotone.originName = 'ci';

export default IconCiTwotone;
