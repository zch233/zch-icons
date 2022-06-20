// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileWordFilledSvg from 'icon-base/es/asn/FileWordFilled';

export interface FileWordFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileWordFilled: FileWordFilledIconType = (props, context) => (
    <Icon name='FileWordFilled' {...{ ...props, ...context.attrs }} icon={FileWordFilledSvg} />
);

IconFileWordFilled.displayName = 'IconFileWordFilled';

export default IconFileWordFilled;
