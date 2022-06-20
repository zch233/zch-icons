// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UnlockFilledSvg from 'icon-base/es/asn/UnlockFilled';

export interface UnlockFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconUnlockFilled: UnlockFilledIconType = (props, context) => <Icon name='UnlockFilled' {...{ ...props, ...context.attrs }} icon={UnlockFilledSvg} />;

IconUnlockFilled.displayName = 'IconUnlockFilled';

export default IconUnlockFilled;
