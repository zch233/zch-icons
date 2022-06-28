// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MehFilledSvg from 'gupo-icons-base/es/asn/MehFilled';

export interface MehFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMehFilled: MehFilledIconType = (props, context) => <Icon name='MehFilled' {...{ ...props, ...context.attrs }} icon={MehFilledSvg} />;

IconMehFilled.displayName = 'IconMehFilled';
IconMehFilled.theme = 'filled';
IconMehFilled.originName = 'meh';

export default IconMehFilled;
