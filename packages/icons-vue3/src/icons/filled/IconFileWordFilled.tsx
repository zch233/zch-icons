// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileWordFilledSvg from 'icons-base/es/asn/FileWordFilled';

export interface FileWordFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileWordFilled: FileWordFilledIconType = (props, context) => (
    <Icon name='FileWordFilled' {...{ ...props, ...context.attrs }} icon={FileWordFilledSvg} />
);

IconFileWordFilled.displayName = 'IconFileWordFilled';
IconFileWordFilled.theme = 'filled';
IconFileWordFilled.originName = 'file-word';

export default IconFileWordFilled;
