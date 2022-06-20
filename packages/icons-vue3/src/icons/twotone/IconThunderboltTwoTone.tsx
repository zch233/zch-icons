// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ThunderboltTwoToneSvg from 'icon-base/es/asn/ThunderboltTwoTone';

export interface ThunderboltTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconThunderboltTwoTone: ThunderboltTwoToneIconType = (props, context) => (
    <Icon name='ThunderboltTwoTone' {...{ ...props, ...context.attrs }} icon={ThunderboltTwoToneSvg} />
);

IconThunderboltTwoTone.displayName = 'IconThunderboltTwoTone';

export default IconThunderboltTwoTone;
