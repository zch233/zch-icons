// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InstagramFilledSvg from 'icon-base/es/asn/InstagramFilled';

export interface InstagramFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconInstagramFilled: InstagramFilledIconType = (props, context) => (
    <Icon name='InstagramFilled' {...{ ...props, ...context.attrs }} icon={InstagramFilledSvg} />
);

IconInstagramFilled.displayName = 'IconInstagramFilled';

export default IconInstagramFilled;
