// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LayoutFilledSvg from 'icon-base/es/asn/LayoutFilled';

export interface LayoutFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLayoutFilled: LayoutFilledIconType = (props, context) => <Icon name='LayoutFilled' {...{ ...props, ...context.attrs }} icon={LayoutFilledSvg} />;

IconLayoutFilled.displayName = 'IconLayoutFilled';

export default IconLayoutFilled;
