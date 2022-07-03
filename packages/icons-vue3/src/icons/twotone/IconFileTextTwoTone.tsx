// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileTextTwotoneSvg from 'icons-base/es/asn/FileTextTwotone';

export interface FileTextTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileTextTwotone: FileTextTwotoneIconType = (props, context) => (
    <Icon name='FileTextTwotone' {...{ ...props, ...context.attrs }} icon={FileTextTwotoneSvg} />
);

IconFileTextTwotone.displayName = 'IconFileTextTwotone';
IconFileTextTwotone.theme = 'twotone';
IconFileTextTwotone.originName = 'file-text';

export default IconFileTextTwotone;
