// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileWordTwoToneSvg from 'icon-base/es/asn/FileWordTwoTone';

export interface FileWordTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileWordTwoTone: FileWordTwoToneIconType = (props, context) => (
    <Icon name='FileWordTwoTone' {...{ ...props, ...context.attrs }} icon={FileWordTwoToneSvg} />
);

IconFileWordTwoTone.displayName = 'IconFileWordTwoTone';

export default IconFileWordTwoTone;
