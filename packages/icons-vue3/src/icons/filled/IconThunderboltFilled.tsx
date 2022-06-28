// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ThunderboltFilledSvg from 'gupo-icons-base/es/asn/ThunderboltFilled';

export interface ThunderboltFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconThunderboltFilled: ThunderboltFilledIconType = (props, context) => (
    <Icon name='ThunderboltFilled' {...{ ...props, ...context.attrs }} icon={ThunderboltFilledSvg} />
);

IconThunderboltFilled.displayName = 'IconThunderboltFilled';
IconThunderboltFilled.theme = 'filled';
IconThunderboltFilled.originName = 'thunderbolt';

export default IconThunderboltFilled;
