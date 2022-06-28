// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GoldenFilledSvg from 'gupo-icons-base/es/asn/GoldenFilled';

export interface GoldenFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconGoldenFilled: GoldenFilledIconType = (props, context) => <Icon name='GoldenFilled' {...{ ...props, ...context.attrs }} icon={GoldenFilledSvg} />;

IconGoldenFilled.displayName = 'IconGoldenFilled';
IconGoldenFilled.theme = 'filled';
IconGoldenFilled.originName = 'golden';

export default IconGoldenFilled;
