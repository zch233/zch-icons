// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CarTwoToneSvg from 'icon-base/es/asn/CarTwoTone';

export interface CarTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCarTwoTone: CarTwoToneIconType = (props, context) => <Icon name='CarTwoTone' {...{ ...props, ...context.attrs }} icon={CarTwoToneSvg} />;

IconCarTwoTone.displayName = 'IconCarTwoTone';

export default IconCarTwoTone;
