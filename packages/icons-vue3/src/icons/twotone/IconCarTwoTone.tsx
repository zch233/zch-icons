// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CarTwotoneSvg from 'gupo-icons-base/es/asn/CarTwotone';

export interface CarTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCarTwotone: CarTwotoneIconType = (props, context) => <Icon name='CarTwotone' {...{ ...props, ...context.attrs }} icon={CarTwotoneSvg} />;

IconCarTwotone.displayName = 'IconCarTwotone';
IconCarTwotone.theme = 'twotone';
IconCarTwotone.originName = 'car';

export default IconCarTwotone;
