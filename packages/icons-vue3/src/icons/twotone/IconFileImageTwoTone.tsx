// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileImageTwoToneSvg from 'icon-base/es/asn/FileImageTwoTone';

export interface FileImageTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileImageTwoTone: FileImageTwoToneIconType = (props, context) => (
    <Icon name='FileImageTwoTone' {...{ ...props, ...context.attrs }} icon={FileImageTwoToneSvg} />
);

IconFileImageTwoTone.displayName = 'IconFileImageTwoTone';

export default IconFileImageTwoTone;
