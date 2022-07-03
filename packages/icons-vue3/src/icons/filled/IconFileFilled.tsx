// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileFilledSvg from 'icons-base/es/asn/FileFilled';

export interface FileFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileFilled: FileFilledIconType = (props, context) => <Icon name='FileFilled' {...{ ...props, ...context.attrs }} icon={FileFilledSvg} />;

IconFileFilled.displayName = 'IconFileFilled';
IconFileFilled.theme = 'filled';
IconFileFilled.originName = 'file';

export default IconFileFilled;
