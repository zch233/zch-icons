// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileTextFilledSvg from 'icon-base/es/asn/FileTextFilled';

export interface FileTextFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileTextFilled: FileTextFilledIconType = (props, context) => (
    <Icon name='FileTextFilled' {...{ ...props, ...context.attrs }} icon={FileTextFilledSvg} />
);

IconFileTextFilled.displayName = 'IconFileTextFilled';

export default IconFileTextFilled;
