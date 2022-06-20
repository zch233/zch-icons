// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BellFilledSvg from 'icon-base/es/asn/BellFilled';

export interface BellFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBellFilled: BellFilledIconType = (props, context) => <Icon name='BellFilled' {...{ ...props, ...context.attrs }} icon={BellFilledSvg} />;

IconBellFilled.displayName = 'IconBellFilled';

export default IconBellFilled;
