// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FireTwoToneSvg from 'icon-base/es/asn/FireTwoTone';

export interface FireTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFireTwoTone: FireTwoToneIconType = (props, context) => <Icon name='FireTwoTone' {...{ ...props, ...context.attrs }} icon={FireTwoToneSvg} />;

IconFireTwoTone.displayName = 'IconFireTwoTone';

export default IconFireTwoTone;
