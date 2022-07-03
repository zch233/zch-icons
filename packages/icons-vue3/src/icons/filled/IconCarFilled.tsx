// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CarFilledSvg from 'icons-base/es/asn/CarFilled';

export interface CarFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCarFilled: CarFilledIconType = (props, context) => <Icon name='CarFilled' {...{ ...props, ...context.attrs }} icon={CarFilledSvg} />;

IconCarFilled.displayName = 'IconCarFilled';
IconCarFilled.theme = 'filled';
IconCarFilled.originName = 'car';

export default IconCarFilled;
