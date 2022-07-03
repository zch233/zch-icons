// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PayCircleFilledSvg from 'icons-base/es/asn/PayCircleFilled';

export interface PayCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPayCircleFilled: PayCircleFilledIconType = (props, context) => (
    <Icon name='PayCircleFilled' {...{ ...props, ...context.attrs }} icon={PayCircleFilledSvg} />
);

IconPayCircleFilled.displayName = 'IconPayCircleFilled';
IconPayCircleFilled.theme = 'filled';
IconPayCircleFilled.originName = 'pay-circle';

export default IconPayCircleFilled;
