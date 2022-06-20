// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ReadFilledSvg from 'icon-base/es/asn/ReadFilled';

export interface ReadFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconReadFilled: ReadFilledIconType = (props, context) => <Icon name='ReadFilled' {...{ ...props, ...context.attrs }} icon={ReadFilledSvg} />;

IconReadFilled.displayName = 'IconReadFilled';

export default IconReadFilled;
