// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PoundCircleTwotoneSvg from 'gupo-icons-base/es/asn/PoundCircleTwotone';

export interface PoundCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPoundCircleTwotone: PoundCircleTwotoneIconType = (props, context) => (
    <Icon name='PoundCircleTwotone' {...{ ...props, ...context.attrs }} icon={PoundCircleTwotoneSvg} />
);

IconPoundCircleTwotone.displayName = 'IconPoundCircleTwotone';
IconPoundCircleTwotone.theme = 'twotone';
IconPoundCircleTwotone.originName = 'pound-circle';

export default IconPoundCircleTwotone;
