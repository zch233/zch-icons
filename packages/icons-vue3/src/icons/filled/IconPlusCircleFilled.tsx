// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlusCircleFilledSvg from 'icon-base/es/asn/PlusCircleFilled';

export interface PlusCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPlusCircleFilled: PlusCircleFilledIconType = (props, context) => (
    <Icon name='PlusCircleFilled' {...{ ...props, ...context.attrs }} icon={PlusCircleFilledSvg} />
);

IconPlusCircleFilled.displayName = 'IconPlusCircleFilled';

export default IconPlusCircleFilled;
