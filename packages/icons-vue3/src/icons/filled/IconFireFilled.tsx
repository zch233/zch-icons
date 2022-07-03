// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FireFilledSvg from 'icons-base/es/asn/FireFilled';

export interface FireFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFireFilled: FireFilledIconType = (props, context) => <Icon name='FireFilled' {...{ ...props, ...context.attrs }} icon={FireFilledSvg} />;

IconFireFilled.displayName = 'IconFireFilled';
IconFireFilled.theme = 'filled';
IconFireFilled.originName = 'fire';

export default IconFireFilled;
