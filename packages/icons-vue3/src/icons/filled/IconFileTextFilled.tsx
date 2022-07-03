// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileTextFilledSvg from 'icons-base/es/asn/FileTextFilled';

export interface FileTextFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileTextFilled: FileTextFilledIconType = (props, context) => (
    <Icon name='FileTextFilled' {...{ ...props, ...context.attrs }} icon={FileTextFilledSvg} />
);

IconFileTextFilled.displayName = 'IconFileTextFilled';
IconFileTextFilled.theme = 'filled';
IconFileTextFilled.originName = 'file-text';

export default IconFileTextFilled;
