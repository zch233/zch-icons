// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileTextTwoToneSvg from 'icon-base/es/asn/FileTextTwoTone';

export interface FileTextTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileTextTwoTone: FileTextTwoToneIconType = (props, context) => (
    <Icon name='FileTextTwoTone' {...{ ...props, ...context.attrs }} icon={FileTextTwoToneSvg} />
);

IconFileTextTwoTone.displayName = 'IconFileTextTwoTone';

export default IconFileTextTwoTone;
