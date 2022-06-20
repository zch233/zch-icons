// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GoldenFilledSvg from 'icon-base/es/asn/GoldenFilled';

export interface GoldenFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconGoldenFilled: GoldenFilledIconType = (props, context) => <Icon name='GoldenFilled' {...{ ...props, ...context.attrs }} icon={GoldenFilledSvg} />;

IconGoldenFilled.displayName = 'IconGoldenFilled';

export default IconGoldenFilled;
